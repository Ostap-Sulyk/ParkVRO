package com.parkvro.backend.service;

import com.parkvro.backend.entities.Booking;

import java.util.List;

public interface BookingService {
    void deleteBooking(Long id);
    Booking getBooking(Long id);
    Booking createBooking(Booking booking, Long customerId, Long parkingSpotId);
    List<Booking> getBookingsByCustomer(Long customerId);
    List<Booking> getBookingsByParkingSpot(Long parkingSpotId);
    List<Booking> getAllBookings();

}
