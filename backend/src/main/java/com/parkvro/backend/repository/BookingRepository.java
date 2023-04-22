package com.parkvro.backend.repository;

import com.parkvro.backend.entities.Booking;
import com.parkvro.backend.entities.ParkingSpot;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


public interface BookingRepository extends CrudRepository<Booking, Long> {
    List<Booking> getAllByCustomerId(Long id);

    @Query("SELECT b FROM Booking b WHERE b.parkingSpot.id = ?1 AND b.bookingDate >= ?2 AND b.bookingDate <=?3")
    List<Booking> findAllByParkingSpotIdAndDate(Long parkingSpotId, LocalDate startDate, LocalDate endDate);

    Optional<Booking> findByParkingSpotAndBookingDate(ParkingSpot parkingSpot, LocalDate bookingDate);

    List<Booking> findAllByCustomerEmail(String email);
}

