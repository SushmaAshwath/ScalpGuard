-- Table to log real-time ticket bookings and bot detection status
CREATE TABLE booking_logs (
    id BIGSERIAL PRIMARY KEY,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    action_taken VARCHAR(50), -- e.g., 'PASSED', 'BLOCKED'
    request_velocity INT,
    user_agent TEXT
);

-- Table managing ticket stock with atomic decrement safeguards
CREATE TABLE ticket_inventory (
    id INT PRIMARY KEY,
    event_name VARCHAR(255),
    available_tickets INT CHECK (available_tickets >= 0)
);