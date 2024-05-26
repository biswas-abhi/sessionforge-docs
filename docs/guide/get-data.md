# Retrieving All Session Data

The `getAll` function in `SessionForge` allows you to retrieve all session data stored in the session file. This can be useful for debugging purposes or for accessing all session variables at once. Below is an example code snippet demonstrating how to use the `getAll` function to retrieve all session data.

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

    // Step 3: Retrieve all session data
    print_r($sessionForgeExample->getAll());
} catch (SessionForgeExceptions $th) {
    print_r($th->formatMessage());
}
```

## Explanation

1. **Configuration Setup:** The configuration array is set up with necessary options such as session file path, session ID, hash key, expiration time, compression, encryption, and encryption key.
2. **SessionForge Initialization:** An instance of the SessionForge class is created using the configuration array.
3. **Retrieving All Session Data:** The getAll function is called to retrieve all session data stored in the session file.

## Usage Notes

The getAll function returns an associative array containing all session variables and their respective values.

Session data is retrieved in its raw form, without any decryption or decompression applied.

---

By utilizing the getAll function, you can easily access and analyze all session data stored in the session file, helping you to debug and troubleshoot any issues related to session management in your application.
