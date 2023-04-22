package com.parkvro.backend.repository;

import com.parkvro.backend.entities.ParkingSpot;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ParkingSpotRepository extends CrudRepository<ParkingSpot, Long> {
    List<ParkingSpot> findAllByAvailableIsTrue();
    List<ParkingSpot> findAllByBusinessPartnerEmail(String email);
    Optional<ParkingSpot> findByIdAndBusinessPartnerEmail(Long id, String email);

}
