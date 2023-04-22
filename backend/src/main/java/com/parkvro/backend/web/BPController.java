package com.parkvro.backend.web;

import com.parkvro.backend.entities.BusinessPartner;
import com.parkvro.backend.entities.ParkingSpot;
import com.parkvro.backend.service.BPService;
import com.parkvro.backend.service.ParkingSpotService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;

import java.math.BigDecimal;
import java.net.URI;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/bp")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3001")
@PreAuthorize("hasRole('business_partner')")
public class BPController {
    private final BPService bpService;
    private final ParkingSpotService parkingSpotService;

    // routes to edit business partner profile
    @PostMapping("/register")
    public ResponseEntity<BusinessPartner> create(@RequestBody @Valid BusinessPartner businessPartner,UriComponentsBuilder uriBuilder) {
        URI uri = uriBuilder.path("/bp").buildAndExpand(bpService.save(businessPartner).getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @GetMapping("")
    public ResponseEntity<BusinessPartner> read(Principal principal) {
        return bpService.getBusinessPartner(principal.getName()).map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("")
    public ResponseEntity<BusinessPartner> update(@RequestBody @Valid BusinessPartner businessPartner, Principal principal) {
        Optional<BusinessPartner> old = bpService.getBusinessPartner(principal.getName());
        if(old.isPresent()){
            businessPartner.setId(old.get().getId());
            businessPartner.setBalance(old.get().getBalance());
            return ResponseEntity.ok(bpService.save(businessPartner));
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("")
    public ResponseEntity<Void> delete(Principal principal) {
        bpService.deleteBusinessPartner(principal.getName());
        return ResponseEntity.noContent().build();
    }

    // routes to edit parking spots
    @GetMapping("/parking-spots")
    public ResponseEntity<List<ParkingSpot>> getParkingSpots(Principal principal) {
        return ResponseEntity.ok(parkingSpotService.getAllParkingByBusinessPartner(principal.getName()));
    }

    @PostMapping("/parking-spots")
    public ResponseEntity<ParkingSpot> createParkingSpot(@RequestBody ParkingSpot parkingSpot, Principal principal, UriComponentsBuilder uriBuilder) {
        Optional<BusinessPartner> bp = bpService.getBusinessPartner(principal.getName());
        if (bp.isPresent()) {
            ParkingSpot createdParkingSpot = parkingSpotService.saveParkingSpot(parkingSpot, bp.get());
            URI uri = uriBuilder.path("bp/parking-spots/{id}").buildAndExpand(createdParkingSpot.getId()).toUri();
            return ResponseEntity.created(uri).build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/parking-spots/{id}")
    public ResponseEntity<ParkingSpot> getParkingSpot(@PathVariable Long id, Principal principal) {
        Optional<ParkingSpot> optional = parkingSpotService.getParkingSpot(id, principal.getName());
        return optional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/parking-spots/{id}")
    public ResponseEntity<ParkingSpot> editParkingSpot(@PathVariable Long id, @Valid @RequestBody ParkingSpot parkingSpot, Principal principal) {
        Optional<ParkingSpot> parkingOpt = parkingSpotService.getParkingSpot(id, principal.getName());
        Optional<BusinessPartner> owner = bpService.getBusinessPartner(principal.getName());

        if (parkingOpt.isPresent() && owner.isPresent()) {
            ParkingSpot existingParkingSpot = parkingOpt.get();

            // Update the specific fields of the existing ParkingSpot with the request data
            existingParkingSpot.setAddress(parkingSpot.getAddress());
            existingParkingSpot.setAvailable(parkingSpot.getAvailable());
            existingParkingSpot.setPrice(parkingSpot.getPrice());
            existingParkingSpot.setImage(parkingSpot.getImage());

            // You can add more fields to update, depending on your ParkingSpot model

            return ResponseEntity.ok(parkingSpotService.saveParkingSpot(existingParkingSpot, owner.get()));
        }
        return ResponseEntity.notFound().build();
    }


    @DeleteMapping("/parking-spots/{id}")
    public ResponseEntity<Void> deleteParkingSpot(@PathVariable Long id, Principal principal) {

        Optional<ParkingSpot> optional = parkingSpotService.getParkingSpot(id, principal.getName());
        if (optional.isPresent()) {
            parkingSpotService.deleteParkingSpot(id, principal.getName());
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }


}
