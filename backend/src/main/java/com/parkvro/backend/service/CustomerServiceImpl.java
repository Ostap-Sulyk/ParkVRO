package com.parkvro.backend.service;

import com.parkvro.backend.entities.Customer;
import com.parkvro.backend.repository.CustomerRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private CustomerRepository customerRepository;


    @Override
    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> getAllCustomers() {
        return (List<Customer>) customerRepository.findAll();
    }

    @Override
    public Customer editCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Customer getCustomer(Long id) {
        return customerRepository.findById(id).get();
    }

    @Override
    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }

}
