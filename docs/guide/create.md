# Creating a New Session

To create a new session with `SessionForge`, you need to configure the library and use its methods to set and save session data. Below is a step-by-step guide along with an example code snippet.

## Step-by-Step Guide

1. **Set Up Configuration:** Define the configuration array with necessary options such as session file path, session ID, hash key, expiration time, compression, encryption, and encryption key.
2. **Instantiate SessionForge:** Create an instance of the `SessionForge` class, passing the configuration array to its constructor.
3. **Set Session Data:** Use the set method to add various types of data (string, integer, float, boolean, array, and null) to the session.
4. **Save the Session:** Call the save method to write the session data to the file.
5. **Handle Exceptions:** Implement exception handling to catch and format any errors that occur during the session creation process.

## Example Code

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

    // Step 3: Set Session Data
    $sessionForgeExample->set('key1', 'value1'); // string
    $sessionForgeExample->set('key2', 123); // int
    $sessionForgeExample->set('key3', 123.54); // float
    $sessionForgeExample->set('key4', 1); // boolean
    $sessionForgeExample->set('key5', true); // boolean
    $sessionForgeExample->set('key6', ['1', '2', '3']); // array
    $sessionForgeExample->set('key6', ['1' => '1', '2' => '2', '3' => '3']); // associative array
    $sessionForgeExample->set('key7', NULL); // null

    // Step 4: Save the Session
    $sessionForgeExample->save();
} catch (SessionForgeExceptions $th) {
    // Step 5: Handle Exceptions
    print_r($th->formatMessage());
}
```

## Explanation

1. **Configuration Array:** The `$config` array holds the necessary configuration for session management, including path, session ID, hash key, expiration time, compression, encryption, and encryption key.
2. **SessionForge Initialization:** The `SessionForge` instance is created using the configuration array.
3. **Setting Data:** Various types of data are added to the session using the set method. This includes strings, integers, floats, booleans, arrays, and null values.
4. **Saving Data:** The save method writes the session data to the file specified in the configuration.
5. **Exception Handling:** Any exceptions thrown during the session creation process are caught and formatted for debugging.

---
This guide and example should help you create and manage sessions using `SessionForge` effectively. Adjust the configuration values and session data as needed to fit your specific application requirements.
