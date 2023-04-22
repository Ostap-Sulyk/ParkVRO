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
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@AllArgsConstructor
public class BackendApplication {

    @Bean
    CommandLineRunner commandLineRunner(
            CustomerRepository customerRepository,
            BPRepository bpRepository,
            ParkingSpotRepository parkingSpotRepository,
            PasswordEncoder encoder) {
        return args -> {
            List<BusinessPartner> businessPartnerList = Arrays.asList(
                    new BusinessPartner("John", "Smith", "johnsmith@gmail.com", "61 Cordova Ave", "+1 (123) 123 1234",
                            encoder.encode("123"), BigDecimal.valueOf(0)),
                    new BusinessPartner("Alex", "Johns", "alexjons@gmail.com", "675 Cardigan RD", "+1 (222) 222 2222",
                            encoder.encode("1234"), BigDecimal.valueOf(0)),
                    new BusinessPartner("John", "Ceena", "johnceena@gmail.com", "12 Can't See Me Rd",
                            "+1 (333) 333 3333", encoder.encode("43211"), BigDecimal.valueOf(0)),
                    new BusinessPartner("Justin", "Trudeau", "justine123@gmail.ca", "Some where in Canada",
                            "+1 (444) 444 4444", encoder.encode("12312"), BigDecimal.valueOf(0)));
            List<Customer> customerList = Arrays.asList(
                    new Customer("Rauf", "Anata", "doctor_rauf@gmail.com", encoder.encode("123321")),
                    new Customer("Veronika", "Ushynska", "miss_blue_berry@gmail.com", encoder.encode("123123")));
            List<ParkingSpot> parkingSpotList = Arrays.asList(
                    new ParkingSpot("1007 Kipling Avenue, Etobicoke, ON, Canada", 43.6444622, -79.53608679999999, true, BigDecimal.valueOf(10.99), businessPartnerList.get(0)),
                    new ParkingSpot("500 Macpherson Ave, Toronto, ON M5R 1M3, Canada", 43.6762309, -79.4102862, true, BigDecimal.valueOf(7.99), businessPartnerList.get(1)),
                    new ParkingSpot("909 Kipling Ave, Etobicoke, ON M8Z 5H3, Canada", 43.637744, -79.5330362, false, BigDecimal.valueOf(5), businessPartnerList.get(2)),
                    new ParkingSpot("1880 Eglinton Ave E, Scarborough, ON M1L 2L1, Canada", 43.72648, -79.2997805, true, BigDecimal.valueOf(23.20), businessPartnerList.get(3)));

            bpRepository.saveAll(businessPartnerList);
            customerRepository.saveAll(customerList);
            parkingSpotRepository.saveAll(parkingSpotList);
        };
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

}
