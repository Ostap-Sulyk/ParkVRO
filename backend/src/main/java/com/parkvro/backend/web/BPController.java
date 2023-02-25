package com.parkvro.backend.web;

import com.parkvro.backend.entities.BusinessPartner;
import com.parkvro.backend.service.BPService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/bp")
@AllArgsConstructor
public class BPController {
    private final BPService bpService;

    @PostMapping("/register")
    public ResponseEntity<BusinessPartner> register(@RequestBody @Valid BusinessPartner businessPartner) {
        return new ResponseEntity<>(bpService.register(businessPartner), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<BusinessPartner> getBp(@PathVariable Long id){
        return new ResponseEntity<>(bpService.getBusinessPartner(id), HttpStatus.OK);
    }
    @GetMapping("/all")
    public ResponseEntity<List<BusinessPartner>> getAllBusinessPartners(){
        return new ResponseEntity<>(bpService.getAllBusinessPartners(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        bpService.deleteBusinessPartner(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
