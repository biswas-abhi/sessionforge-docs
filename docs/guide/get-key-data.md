# Retrieving Data for a Specific Key

The `get` function in `SessionForge` allows you to retrieve the data stored for a specific key in the session. This can be useful for accessing individual session variables. Below is an example code snippet demonstrating how to use the `get` function to retrieve data for a specific key.

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

    // Step 3: Retrieve data for a specific key
    print_r($sessionForgeExample->get('key6'));
} catch (SessionForgeExceptions $th) {
    print_r($th->formatMessage());
}
```

### Explanation

- **Configuration Setup**: The configuration array is set up with necessary options such as session file path, session ID, hash key, expiration time, compression, encryption, and encryption key.
- **SessionForge Initialization**: An instance of the `SessionForge` class is created using the configuration array.
- **Retrieving Data for a Specific Key**: The `get` function is called with the desired key (in this case, `'key6'`) to retrieve the data stored for that key in the session.

### Usage Notes

- The `get` function returns the data stored for the specified key.
- If the key does not exist in the session, `null` is returned.

By utilizing the `get` function, you can easily access and retrieve specific session data stored for a particular key, allowing you to work with individual session variables in your application.

---

This description provides clear instructions on how to use the `get` function in SessionForge to retrieve data for a specific key. Adjust the configuration values as needed to fit your specific application requirements.
