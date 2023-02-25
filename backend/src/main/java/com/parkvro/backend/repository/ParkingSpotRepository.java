package com.parkvro.backend.repository;

import com.parkvro.backend.entities.BusinessPartner;
import com.parkvro.backend.entities.ParkingSpot;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ParkingSpotRepository extends CrudRepository<ParkingSpot, Long> {
    List<ParkingSpot> findAllByAvailableIsTrue();
    List<ParkingSpot> findAllByBusinessPartnerId(Long id);

}
