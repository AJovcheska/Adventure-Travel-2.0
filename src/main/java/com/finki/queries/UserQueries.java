package com.finki.queries;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Getter
@Component
@PropertySource("classpath:user-queries.properties")
public class UserQueries {

    @Value("${add-user}")
    private String addUser;

    @Value("${select-all}")
    private String selectAll;

    @Value("${select-by-username}")
    private String selectByUsername;

    @Value("${add-authority}")
    private String addAuthority;
}
