package com.parkvro.backend.service;

import com.parkvro.backend.entities.Customer;

import java.util.List;
import java.util.Optional;

public interface CustomerService {
    Customer save(Customer customer);
    List<Customer> getAllCustomers();
    Customer editCustomer(Customer customer);
    Optional<Customer> getCustomer(Long id);
    Optional<Customer> getCustomer(String email);
    void deleteCustomer(String email);

}
