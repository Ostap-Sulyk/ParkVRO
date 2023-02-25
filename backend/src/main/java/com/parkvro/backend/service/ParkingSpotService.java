package com.parkvro.backend.service;

import com.parkvro.backend.entities.ParkingSpot;

import java.util.List;

public interface ParkingSpotService {
    ParkingSpot saveParkingSpot(ParkingSpot parkingSpot, Long businessPartnerId);

    List<ParkingSpot> getAllParking();
    List<ParkingSpot> getAllAvailableParking();

    List<ParkingSpot> getAllParkingByBusinessPartner(Long id);

    ParkingSpot editParkingSpot(ParkingSpot parkingSpot, Long id);

    ParkingSpot getParkingSpot(Long id);

    void deleteParkingSpot(Long id);



}
