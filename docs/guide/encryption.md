# Encryption Overview

`SessionForge` employs `sodium_crypto_aead_chacha20poly1305_ietf_encrypt()` with the `SODIUM_CRYPTO_AEAD_CHACHA20POLY1305_IETF_NPUBBYTES` nonce for encryption. This state-of-the-art encryption method provides strong cryptographic protection, safeguarding session data against unauthorized access and tampering.

#### Usage Example

```php

require 'path/to/SessionForge.php'; // Adjust the path as needed

use SessionForge\SessionForge;

try {
    // Step 1: Set Up Configuration
    $config = [
        'path' => __DIR__ . '/sessions', // Directory to store session files
        'sessionId' => 'your_session_id', // Default session ID
        'hashKey' => 'your_hash_key', // Key for hashing
        'validUntil' => 3600, // Session expiration time in seconds
        'compress' => true, // Enable compression
        'encryption' => true, // Enable encryption
        'key' => 'your_encryption_key' // Encryption key
    ];

    // Step 3: Perform session operations (e.g., save, update, retrieve)
    // Example:
    $sessionForge->save(true); // Save session data with fallback enabled
} catch (SessionForgeExceptions $th) {
    print_r($th->formatMessage());
}
```

In this example, SessionForge is configured to enable encryption using `sodium_crypto_aead_chacha20poly1305_ietf_encrypt()` with the `SODIUM_CRYPTO_AEAD_CHACHA20POLY1305_IETF_NPUBBYTES` nonce. This ensures that session data is encrypted using a secure and modern encryption algorithm, providing strong protection against unauthorized access.

#### Key Features

- **Modern Encryption**: SessionForge utilizes `sodium_crypto_aead_chacha20poly1305_ietf_encrypt` for modern and robust encryption of session data.
- **Nonce Usage**: The library employs the `SODIUM_CRYPTO_AEAD_CHACHA20POLY1305_IETF_NPUBBYTES` nonce for enhanced security during encryption.
- **Data Confidentiality**: With encryption enabled, SessionForge ensures the confidentiality of session data, preventing unauthorized access to sensitive information.

---

This description highlights how SessionForge leverages modern encryption techniques, such as `sodium_crypto_aead_chacha20poly1305_ietf_encrypt`, to protect session data in PHP applications
