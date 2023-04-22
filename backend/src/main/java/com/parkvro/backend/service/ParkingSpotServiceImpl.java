package com.parkvro.backend.service;

import com.parkvro.backend.entities.BusinessPartner;
import com.parkvro.backend.entities.ParkingSpot;
import com.parkvro.backend.repository.ParkingSpotRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ParkingSpotServiceImpl implements ParkingSpotService {
    private final ParkingSpotRepository parkingSpotRepository;
    public Optional<ParkingSpot> findById(Long id) {
        return parkingSpotRepository.findById(id);
    }

    public ParkingSpot saveParkingSpot(ParkingSpot parkingSpot, BusinessPartner bp) {
        parkingSpot.setBusinessPartner(bp);
        return parkingSpotRepository.save(parkingSpot);
    }

    @Override
    public List<ParkingSpot> getAllAvailableParking() {
        return parkingSpotRepository.findAllByAvailableIsTrue();
    }


    @Override
    public List<ParkingSpot> getAllParkingByBusinessPartner(String email) {
        return parkingSpotRepository.findAllByBusinessPartnerEmail(email);
    }


    @Override
    public Optional<ParkingSpot> getParkingSpot(Long id, String email) {
        return parkingSpotRepository.findByIdAndBusinessPartnerEmail(id, email);
    }

    @Override
    public Optional<ParkingSpot> getParkingSpot(Long id) {
        return parkingSpotRepository.findById(id);
    }

    @Override
    public void deleteParkingSpot(Long id, String email) {
        parkingSpotRepository.findByIdAndBusinessPartnerEmail(id, email).ifPresent(parkingSpotRepository::delete);
    }

}
