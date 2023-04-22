package com.parkvro.backend.service;

import com.parkvro.backend.entities.BusinessPartner;
import com.parkvro.backend.entities.ParkingSpot;

import java.util.List;
import java.util.Optional;

public interface ParkingSpotService {
    ParkingSpot saveParkingSpot(ParkingSpot parkingSpot, BusinessPartner businessPartner);

    List<ParkingSpot> getAllAvailableParking();

    List<ParkingSpot> getAllParkingByBusinessPartner(String email);

    Optional<ParkingSpot> getParkingSpot(Long id, String email);
    Optional<ParkingSpot> getParkingSpot(Long id);

    void deleteParkingSpot(Long id, String email);

    Optional<ParkingSpot> findById(Long id);

}
