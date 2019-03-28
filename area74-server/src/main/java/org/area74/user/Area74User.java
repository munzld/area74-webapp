package org.area74.user;

import org.apache.commons.lang3.builder.ToStringBuilder;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Area74User {
    private static final long serialVersionUID = 1L;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm:ss");

    private final String username;
    private final LocalDateTime sessionExpiresAt;

    public Area74User(String username, LocalDateTime sessionExpiresAt) {
        this.username = username;
        this.sessionExpiresAt = sessionExpiresAt;
    }

    public String getUsername() {
        return username;
    }

    public LocalDateTime getSessionExpiresAt() {
        return sessionExpiresAt;
    }

    @Override
    public String toString() {
        /* @formatter:off */
        return new ToStringBuilder(this)
                .append("originalFileName", username)
                .append("sessionExipresAt", sessionExpiresAt.format(formatter))
                .toString();
        /* @formatter:on */
    }
}
