# Destroying a Session

The destroy function in `SessionForge` allows you to completely destroy a session, clearing all session data and removing the session file. Once destroyed, the session cannot be recovered. Below is an example code snippet demonstrating how to use the destroy function to delete a session.

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

    // Step 2: Instantiate SessionForge
    $sessionForgeExample = new SessionForge($config);

    // Step 3: Destroy the session
    $sessionForgeExample->destroy();

    echo "Session data for 'key1': ";
    print_r($sessionForgeExample->get('key1')); //throw error
} catch (SessionForgeExceptions $th) {
    print_r($th->formatMessage());
}
```

## Explanation

1. **Configuration Setup:** The configuration array is set up with necessary options such as session file path, session ID, hash key, expiration time, compression, encryption, and encryption key.
2. **SessionForge Initialization:** An instance of the SessionForge class is created using the configuration array.
3. **Destroying the Session:** The destroy function is called to completely destroy the session, removing all session data and the session file.

## Usage Notes

Once a session is destroyed, all associated session data is permanently deleted and cannot be recovered.

Use the destroy function with caution, as it irreversibly removes all session data.

---

By utilizing the destroy function, you can ensure that sensitive session data is properly cleared when it is no longer needed, maintaining the security and integrity of your application.
