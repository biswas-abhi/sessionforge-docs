# Configuration

To configure `SessionForge`, you need to set the configuration variables directly in your application code when you instantiate the `SessionForge` class. Below are the configuration options and an example of how to set them up.

## Configuration Options

### Here are the available configuration options you can set:

1. **path:** Specifies the directory where session files will be stored. Ensure that this directory is writable.
2. **sessionId:** Defines the default session file name.
3. **hashKey:** Key used for hashing session data.
4. **validUntil:** Time in seconds until the session expires.
5. **compress:** Boolean value to enable or disable compression of session files.
6. **encryption:** Boolean value to enable or disable encryption of session data.
7. **key:** Key used for encrypting session data.

### Example Configuration

When creating a new `SessionForge` instance, pass the configuration array directly:

```php

require 'path/to/SessionForge.php'; // Adjust the path as needed

use SessionForge\SessionForge;

$config = [
    'path' => __DIR__ . '/sessions', // Directory to store session files
    'sessionId' => 'your_session_id', // Default session ID
    'hashKey' => 'your_hash_key', // Key for hashing
    'validUntil' => 3600, // Session expiration time in seconds
    'compress' => true, // Enable compression
    'encryption' => true, // Enable encryption
    'key' => 'your_encryption_key' // Encryption key
];

$session = new SessionForge($config);
```

## Setting Up the Configuration in Your Application

Define the Configuration Array:

Define the `$config` array in your application code, setting the necessary options according to your requirements.

Instantiate the Session Class with Configuration:

Pass the `$config` array when creating a new `SessionForge` instance to ensure it uses the provided configuration.

By setting the configuration directly in your application code, you ensure that `SessionForge` operates according to your specific requirements without the need for an external configuration file.

## Recommendations

1. **Hash Key:** The hash key must be `128 bits` (`16 bytes`) for security and efficiency.
2. **Compression:** `Compression` is enabled by default and it is recommended to keep it enabled to save storage space and potentially improve performance.
3. **Encryption Key:** If `encryption` is enabled, the key must be `256 bits` (`32 bytes`) to comply with `SODIUM_CRYPTO_AEAD_CHACHA20POLY1305_IETF_NPUBBYTES`.
