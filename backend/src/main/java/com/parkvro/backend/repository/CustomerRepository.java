package com.parkvro.backend.repository;

import com.parkvro.backend.entities.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface CustomerRepository extends CrudRepository<Customer, Long> {
    Optional<Customer> findByEmail(String email);
    Optional<Customer> deleteCustomerByEmail(String email);
}
