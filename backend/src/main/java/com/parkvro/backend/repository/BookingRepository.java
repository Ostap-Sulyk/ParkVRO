package com.parkvro.backend.repository;

import com.parkvro.backend.entities.Booking;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface BookingRepository extends CrudRepository<Booking, Long> {
    List<Booking> getAllByCustomerId(Long id);

    List<Booking> getAllByParkingSpotId(Long id);

}
