package com.parkvro.backend.repository;

import com.parkvro.backend.entities.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface CustomerRepository extends CrudRepository<Customer, Long> {
}
