package org.area74;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;

@ControllerAdvice
public class UnhandledExceptionHandler {

    private static final Logger LOG = LoggerFactory.getLogger(UnhandledExceptionHandler.class);

    /**
     * 401 Handler
     *
     * @return
     */
    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ErrorResponse> accessDenied() {
        return new ErrorResponse("Access Denied", HttpStatus.UNAUTHORIZED).createResponse();
    }

    /**
     * 400 Validation handler
     *
     * @param e
     * @return
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<List<FieldError>> validationException(final MethodArgumentNotValidException e) {
        return new ResponseEntity<>(e.getBindingResult().getFieldErrors(), HttpStatus.BAD_REQUEST);
    }

    /**
     * Catch all 500 Handler
     *
     * @param ex
     * @return
     */
    @ExceptionHandler(Throwable.class)
    public ResponseEntity<ErrorResponse> handleException(final Throwable ex) {
        LOG.error("Unhandled Exception", ex);
        return new ErrorResponse("Server Error", HttpStatus.INTERNAL_SERVER_ERROR).createResponse();
    }

    /**
     * 405 Handler
     *
     * @param ex
     * @return
     */
    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<ErrorResponse> handleMethodNotAllowed(final HttpRequestMethodNotSupportedException ex) {
        LOG.error("Method not allowed! - {}", ex.getMessage());
        return new ErrorResponse("Method not allowed!", HttpStatus.METHOD_NOT_ALLOWED).createResponse();
    }

    /**
     * Remote REST Handler
     *
     * @param exception
     * @return
     */
    @ExceptionHandler(HttpClientErrorException.class)
    public ResponseEntity<String> handleRestTemplateError(final HttpClientErrorException exception) {
        LOG.error("({}) Error calling REST endpoint: {}", exception.getStatusCode().value(), exception.getResponseBodyAsString());
        return ResponseEntity.status(exception.getStatusCode()).body(exception.getResponseBodyAsString());
    }

    /**
     * Object wrapper for response to create well formed JSON
     */
    public static class ErrorResponse {
        private final String message;
        private final HttpStatus status;

        /**
         * @param message String message to display
         * @param status HttpStatus code enum name
         */
        public ErrorResponse(final String message, final HttpStatus status) {
            this.message = message;
            this.status = status;
        }

        /**
         * @return The ResponseEntity to return to the user
         */
        public ResponseEntity<ErrorResponse> createResponse() {
            return new ResponseEntity<>(this, status);
        }

        public String getMessage() {
            return message;
        }

        public HttpStatus getStatus() {
            return status;
        }
    }
}
