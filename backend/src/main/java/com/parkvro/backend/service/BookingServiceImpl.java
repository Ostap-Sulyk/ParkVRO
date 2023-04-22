package com.parkvro.backend.service;

import com.parkvro.backend.entities.Booking;
import com.parkvro.backend.entities.BusinessPartner;
import com.parkvro.backend.entities.Customer;
import com.parkvro.backend.entities.ParkingSpot;
import com.parkvro.backend.repository.BookingRepository;
import com.parkvro.backend.repository.CustomerRepository;
import com.parkvro.backend.repository.ParkingSpotRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@Service
@AllArgsConstructor
public class BookingServiceImpl implements BookingService {
    private  BookingRepository bookingRepository;
    private  CustomerRepository customerRepository;
    private  ParkingSpotRepository parkingSpotRepository;

    @Override
    public Optional<Booking> createBooking(Map<String, Object> bookingDateRaw, Long parkingSpotId, String customerEmail) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        ParkingSpot parkingSpot = parkingSpotRepository.findById(parkingSpotId).get();
        Customer customer = customerRepository.findByEmail(customerEmail).get();
        BusinessPartner businessPartner = parkingSpot.getBusinessPartner();
        businessPartner.setBalance(businessPartner.getBalance().add(parkingSpot.getPrice()));


        // Retrieve the bookingDate property from the request body
        String bookingDate = (String) bookingDateRaw.get("bookingDate");

        // Validate the bookingDate using the DateTimeFormatter
        LocalDate localDate;
        try {
            localDate = LocalDate.parse(bookingDate, formatter);
        } catch (DateTimeParseException e) {
            return Optional.empty();
        }

        // Check if there is already a booking for the given parking spot on the given date
        Optional<Booking> existingBooking = bookingRepository.findByParkingSpotAndBookingDate(parkingSpot, localDate);
        if (existingBooking.isPresent()) {
            // A booking already exists for the given parking spot on the given date, return null to indicate failure
            return Optional.empty();
        } else {
            // No booking exists for the given parking spot on the given date, create a new booking and save it
            Booking booking = new Booking(Date.valueOf(localDate), customer, parkingSpot);
            return Optional.of(bookingRepository.save(booking));
        }
    }


    @Override
    public List<Booking> getBookingsByCustomer(Long customerId) {
        return bookingRepository.getAllByCustomerId(customerId);
    }

    @Override
    public List<Booking> getBookingsByParkingSpot(Long parkingSpotId) {
        return getBookingsByParkingSpot(parkingSpotId);
    }


    @Override
    public List<Booking> getBookingsByDate(Long parkingSpotId, LocalDate startDate, LocalDate endDate) {
        return bookingRepository.findAllByParkingSpotIdAndDate(parkingSpotId, startDate, endDate);
    }

    @Override
    public List<Booking> getBookingsByCustomerEmail(String email) {
        return bookingRepository.findAllByCustomerEmail(email);
    }
}
