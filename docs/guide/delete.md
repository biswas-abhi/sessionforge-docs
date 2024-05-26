# Deleting a Session

The delete function in `SessionForge` allows you to remove specific session variables or clear the entire session data. Below is an example code snippet demonstrating how to use the delete function to remove session variables and retrieve session data.

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

    // Step 3: Delete session variables
    $sessionForgeExample->delete('key6');

    // Step 4: Retrieve session data
    echo "Session data for 'key1': ";
    print_r($sessionForgeExample->get('key1'));

    echo "Session data for 'key6': ";
    print_r($sessionForgeExample->get('key6')); // delete key
} catch (SessionForgeExceptions $th) {
    print_r($th->formatMessage());
}
```

## Explanation

1. **Configuration Setup:** The configuration array is set up with necessary options such as session file path, session ID, hash key, expiration time, compression, encryption, and encryption key.
2. **SessionForge Initialization:** An instance of the `SessionForge` class is created using the configuration array.
3. **Deleting Session Variables:** The delete function is called to remove the session variable with the key 'key6'.

## Usage Notes

You can use the delete function to remove specific session variables by passing their keys as arguments.

---

By utilizing the delete function, you can effectively manage session data in your application, removing unnecessary variables.
