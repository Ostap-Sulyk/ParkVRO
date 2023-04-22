package com.parkvro.backend.service;

import com.parkvro.backend.entities.Booking;
import com.parkvro.backend.entities.ParkingSpot;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface BookingService {
    Optional<Booking> createBooking(Map<String, Object> bookingDateRaw, Long parkingSpotId, String customerEmail);

    List<Booking> getBookingsByCustomer(Long customerId);
    List<Booking> getBookingsByParkingSpot(Long parkingSpotId);
    List<Booking> getBookingsByDate(Long parkingSpotId, LocalDate startDate, LocalDate endDate);
    List<Booking> getBookingsByCustomerEmail(String email);

}