package com.finki.domain;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Set;

@Entity
@Getter
@Setter
public class User {

    @Id
    @Column(updatable = false, nullable = false)
    @Size(min = 0, max = 50)
    private String username;

    @Size(min = 0, max = 500)
    private String password;

    @Email
    @Size(min = 0, max = 50)
    private String email;

    private boolean activated;

    @Size(min = 0, max = 100)
    @Column(name = "activationkey")
    private String activationKey;

    @Size(min = 0, max = 100)
    @Column(name = "resetpasswordkey")
    private String resetPasswordKey;

    @Size(min = 0, max = 10)
    @Column(name = "sex")
    private String sex;

    @Size(min = 0, max = 100)
    @Column(name = "profession")
    private String profession;

    @Size(min = 0, max = 100)
    @Column(name = "tripCompanion")
    private String tripCompanion;

    @Size(min = 0, max = 100)
    @Column(name = "entertainment")
    private String entertainment;

    @Size(min = 0, max = 100)
    @Column(name = "tripLength")
    private String tripLength;

    @Size(min = 0, max = 100)
    @Column(name = "destination")
    private String destination;

    @Size(min = 0, max = 100)
    @Column(name = "country")
    private String country;

    @Size(min = 0, max = 100)
    @Column(name = "name")
    private String name;

    @Size(min = 0, max = 100)
    @Column(name = "age")
    private Integer age;

    @ManyToMany
    @JoinTable(
            name = "user_authority",
            joinColumns = @JoinColumn(name = "username"),
            inverseJoinColumns = @JoinColumn(name = "authority"))
    private Set<Authority> authorities;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (!username.equals(user.username)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return username.hashCode();
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", activated='" + activated + '\'' +
                ", activationKey='" + activationKey + '\'' +
                ", resetPasswordKey='" + resetPasswordKey + '\'' +
                ", authorities=" + authorities +
                '}';
    }
}
