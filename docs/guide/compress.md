# Compress Overview

`SessionForge` leverages the `gzcompress` function with level `9` compression and `ZLIB_ENCODING_GZIP` encoding to compress session data effectively. This advanced compression technique ensures that session data is stored in a highly efficient manner, minimizing storage space requirements while maintaining data integrity.

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

    // Step 2: Instantiate SessionForge
    $sessionForge = new SessionForge($config);

    // Step 3: Perform session operations (e.g., save, update, retrieve)
    // Example:
    $sessionForge->save(true); // Save session data with fallback enabled
} catch (SessionForgeExceptions $th) {
    print_r($th->formatMessage());
}
```

In this example, `SessionForge` is configured to enable compression with `gzcompress` function using level 9 compression and `ZLIB_ENCODING_GZIP` encoding. This ensures efficient storage of session data while maintaining high data integrity.

#### Key Features

- **Efficient Compression**: `SessionForge` utilizes `gzcompress` function with level 9 compression and `ZLIB_ENCODING_GZIP` encoding for efficient compression of session data.
- **Optimized Storage**: By compressing session data, `SessionForge` minimizes storage space requirements, resulting in optimized storage efficiency.
- **Data Integrity**: Despite compression, `SessionForge` ensures that session data integrity is preserved, allowing for reliable and secure session management.

---

This description provides an overview of how `SessionForge` utilizes advanced compression techniques to optimize storage efficiency while maintaining data integrity in `PHP` applications.