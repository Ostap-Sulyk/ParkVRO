package com.parkvro.backend.web;

import com.parkvro.backend.entities.BusinessPartner;
import com.parkvro.backend.entities.ParkingSpot;
import com.parkvro.backend.repository.BPRepository;
import com.parkvro.backend.service.ParkingSpotService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/parking")
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3001", "http://localhost:3000"})
public class ParkingSpotController {
    final private ParkingSpotService parkingSpotService;
    final private BPRepository bpRepository;

    @PostMapping("/{businessPartnerId}")
    public ResponseEntity<ParkingSpot> addParkingSpot(@RequestBody @Valid ParkingSpot parkingSpot, @PathVariable Long businessPartnerId) {
        BusinessPartner businessPartner = bpRepository.findById(businessPartnerId).get();
        parkingSpot.setBusinessPartner(businessPartner);
        return new ResponseEntity<>(parkingSpotService.saveParkingSpot(parkingSpot, businessPartnerId), HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<ParkingSpot>> getAllParkingSpots() {
        return new ResponseEntity<>(parkingSpotService.getAllParking(), HttpStatus.OK);
    }

    @GetMapping("/available")
    public ResponseEntity<List<ParkingSpot>> getAllAvailableParkingSpots() {
        return new ResponseEntity(parkingSpotService.getAllAvailableParking(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteParkingSpot(@PathVariable Long id) {
        parkingSpotService.deleteParkingSpot(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @GetMapping("all/bp/{id}")
    public ResponseEntity<List<ParkingSpot>> getByBp(@PathVariable Long id) {
        return new ResponseEntity<>(parkingSpotService.getAllParkingByBusinessPartner(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ParkingSpot> updateParkingSpot(@RequestBody @Valid ParkingSpot parkingSpot, @PathVariable Long id) {
        return new ResponseEntity<>(parkingSpotService.editParkingSpot(parkingSpot, id), HttpStatus.OK);


    }

}
