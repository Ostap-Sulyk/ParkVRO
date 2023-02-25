package com.parkvro.backend;

import com.parkvro.backend.entities.BusinessPartner;
import com.parkvro.backend.entities.Customer;
import com.parkvro.backend.entities.ParkingSpot;
import com.parkvro.backend.repository.BPRepository;
import com.parkvro.backend.repository.CustomerRepository;
import com.parkvro.backend.repository.ParkingSpotRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;
import java.util.List;


//TODO test create booking
//TODO implement command line runner to add bookings to database

@SpringBootApplication
@AllArgsConstructor
public class BackendApplication implements CommandLineRunner {
    CustomerRepository customerRepository;
    BPRepository bpRepository;
    ParkingSpotRepository parkingSpotRepository;

    @Override
    public void run(String... args) throws Exception {
        List<BusinessPartner> businessPartnerList = Arrays.asList(
                new BusinessPartner("John", "Smith", "johnsmith@gmail.com", "61 Cordova Ave", "+1 (123) 123 1234","123"),
                new BusinessPartner("Alex", "Johns", "alexjons@gmail.com", "675 Cardigan RD", "+1 (222) 222 2222","1234"),
                new BusinessPartner("John", "Ceena", "johnceena@gmail.com", "12 Can't See Me Rd", "+1 (333) 333 3333", "43211"),
                new BusinessPartner("Justin", "Trudeau", "justine123@gmail.ca", "Some where in Canada", "+1 (444) 444 4444","12312")
        );


        List<Customer> customerList = Arrays.asList(
                new Customer("Ostap", "Sulyk", "ostapsulyk@gmail.com","123123" ),
                new Customer("Rauf", "Anata", "doctor_rauf@gmail.com", "123321"),
                new Customer("Veronika", "Ushynska", "miss_blue_berry@gmail.com", "123123")
        );

        List<ParkingSpot> parkingSpotList = Arrays.asList(
                new ParkingSpot("65 Mulgrove Dr, Etobicoke, ON, M9C 2R4", true, businessPartnerList.get(0)),
                new ParkingSpot("1007 Kipling Ave, Etobicoke, ON, M9B 3L3", true, businessPartnerList.get(1)),
                new ParkingSpot("909 Kipling Ave, Etobicoke, ON M8Z 5H3", false, businessPartnerList.get(2)),
                new ParkingSpot("1880 Eglinton Ave E, Scarborough, ON M1L 2L1", true, businessPartnerList.get(3))
        );


        bpRepository.saveAll(businessPartnerList);
        customerRepository.saveAll(customerList);
        parkingSpotRepository.saveAll(parkingSpotList);

    }

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }


}
