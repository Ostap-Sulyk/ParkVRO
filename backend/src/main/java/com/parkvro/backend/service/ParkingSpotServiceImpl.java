package com.parkvro.backend.service;

import com.parkvro.backend.entities.ParkingSpot;
import com.parkvro.backend.repository.ParkingSpotRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ParkingSpotServiceImpl implements ParkingSpotService {
    private final ParkingSpotRepository parkingSpotRepository;

    public ParkingSpot saveParkingSpot(ParkingSpot parkingSpot, Long businessPartnerId) {
        return parkingSpotRepository.save(parkingSpot);
    }

    @Override
    public List<ParkingSpot> getAllParking() {
        return (List<ParkingSpot>) parkingSpotRepository.findAll();
    }

    @Override
    public List<ParkingSpot> getAllAvailableParking() {
        return parkingSpotRepository.findAllByAvailableIsTrue();
    }

    @Override
    public List<ParkingSpot> getAllParkingByBusinessPartner(Long businessPartnerId) {
        return parkingSpotRepository.findAllByBusinessPartnerId(businessPartnerId);
    }

    @Override
    public ParkingSpot editParkingSpot(ParkingSpot parkingSpot, Long id) {
        ParkingSpot myParkingSpot = parkingSpotRepository.findById(id).get();
        myParkingSpot.update(parkingSpot);
        parkingSpotRepository.save(myParkingSpot);
        return myParkingSpot;
    }

    @Override
    public ParkingSpot getParkingSpot(Long id) {
        return parkingSpotRepository.findById(id).get();
    }

    @Override
    public void deleteParkingSpot(Long id) {

    }

}
