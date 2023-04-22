package com.parkvro.backend.web;


import com.parkvro.backend.entities.Booking;
import com.parkvro.backend.entities.Customer;
import com.parkvro.backend.entities.ParkingSpot;
import com.parkvro.backend.service.BookingService;
import com.parkvro.backend.service.CustomerService;
import com.parkvro.backend.service.ParkingSpotService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/customer")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@PreAuthorize("hasRole('customer')")
public class CustomerController {
    private final CustomerService customerService;
    private final ParkingSpotService parkingSpotService;
    private final BookingService bookingService;

    @PostMapping("/register")
    public ResponseEntity<Customer> create(@RequestBody @Valid Customer customer) {
        return new ResponseEntity<>(customerService.save(customer), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<Customer> read(Principal principal) {
        return customerService.getCustomer(principal.getName()).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("")
    public ResponseEntity<Customer> update(@RequestBody @Valid Customer customer, Principal principal) {
        Customer old = customerService.getCustomer(principal.getName()).get();
        customer.setId(old.getId());
        return ResponseEntity.ok(customerService.save(customer));
    }

    @DeleteMapping("")
    public ResponseEntity<Void> delete(Principal principal) {
        customerService.deleteCustomer(principal.getName());
        return ResponseEntity.noContent().build();
    }

    // customer bookings
    @GetMapping("/parking-spots")
    public ResponseEntity<List<ParkingSpot>> getAvailableParkingSpots() {
        return ResponseEntity.ok(parkingSpotService.getAllAvailableParking());
    }

    @GetMapping("/parking-spots/{id}")
    public ResponseEntity<List<Booking>> getParkingSpotBookings(@PathVariable Long id) {
        LocalDate today = LocalDate.now();
        LocalDate endDate = today.plusDays(14);
        return ResponseEntity.ok(bookingService.getBookingsByDate(id, today, endDate));
    }

    @PostMapping("/parking-spots/{id}")
    public ResponseEntity<Booking> makeBooking(@PathVariable Long id, @RequestBody Map<String, Object> requestBody, Principal principal) {
        return bookingService.createBooking(requestBody, id, principal.getName()).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @GetMapping("/bookings")
    public ResponseEntity<List<Booking>> getAllBookingsByCustomerEmail(Principal principal) {
        return ResponseEntity.ok(bookingService.getBookingsByCustomerEmail(principal.getName()));
    }
    //TODO: increase balance of bp when booking is made
    //TODO: Redirect customer and BP to SIGNUP page when they delete their accounts

}
