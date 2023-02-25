package com.parkvro.backend.service;

import com.parkvro.backend.entities.Customer;

import java.util.List;

public interface CustomerService {
    Customer saveCustomer(Customer customer);
    List<Customer> getAllCustomers();
    Customer editCustomer(Customer customer);
    Customer getCustomer(Long id);
    void deleteCustomer(Long id);

}
