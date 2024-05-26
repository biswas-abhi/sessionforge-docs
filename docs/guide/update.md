# Updating a Session

The update function in `SessionForge` allows you to update an existing session with new data. There are two ways to update a session: the first method involves setting individual session variables using the set method followed by saving the session, while the second method allows you to update multiple session variables at once using the update method.

## Method 1: Individual Updates

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

    // Step 3: Set session data
    $sessionForgeExample->set('key1', 'value1'); // string
    $sessionForgeExample->set('key2', 987); // int
    $sessionForgeExample->set('key3', 1233.954); // float
    $sessionForgeExample->set('key4', 0); // boolean
    $sessionForgeExample->set('key5', false); // boolean
    $sessionForgeExample->set('key6', ['1', '232', '33']); // array
    $sessionForgeExample->set('key8', ['1' => '1', 'red' => '2', '3' => '3']); // array
    $sessionForgeExample->set('key9', 'value8'); // string

    // Step 4: Save the session
    $sessionForgeExample->save(false); // Do not overwrite existing session
} catch (SessionForgeExceptions $th) {
    print_r($th->formatMessage());
}
```

## Method 2: Bulk Update

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

    // Step 3: Update session data
    $sessionForgeExample->update([
        'key1' => 'value1',
        'key2' => 987,
        'key3' => 1233.954,
        'key4' => 0,
        'key6' => ['1', '232', '33'],
        'key8' => ['1' => '1', 'red' => '2', '3' => '3'],
        'key9' => 'value8'
    ]); // Overwrite existing session
} catch (SessionForgeExceptions $th) {
    print_r($th->formatMessage());
}
```

Both methods provide flexibility in updating session data. Method 1 allows for individual updates while Method 2 enables bulk updates. Choose the method that best fits your use case.

---

This description provides clear instructions on how to update sessions using `SessionForge`, with explanations for both the individual and bulk update methods. Adjust the configuration values and session data as needed to fit your specific application requirements.
