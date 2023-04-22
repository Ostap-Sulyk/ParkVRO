package com.parkvro.backend.service;

import com.parkvro.backend.entities.Customer;
import com.parkvro.backend.repository.CustomerRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository repository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Customer save(Customer customer) {
        customer.setPassword(passwordEncoder.encode(customer.getPassword()));
        return repository.save(customer);
    }

    @Override
    public List<Customer> getAllCustomers() {
        return (List<Customer>) repository.findAll();
    }

    @Override
    public Customer editCustomer(Customer customer) {
        return repository.save(customer);
    }

    @Override
    public Optional<Customer> getCustomer(Long id) {
        return repository.findById(id);
    }

    @Override
    public Optional<Customer> getCustomer(String email) {
        return repository.findByEmail(email);
    }

    @Override
    public void deleteCustomer(String email) {
        repository.findByEmail(email).ifPresent(repository::delete);
    }

}
