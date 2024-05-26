# Fallback System Overview

In `SessionForge`, the fallback system provides a mechanism to recover from situations where session data is corrupted or tampered with. When enabled, the fallback system detects changes in session data integrity, such as alterations to the session file's hash, changes in encryption keys, or manual modifications to encrypted data.

## Key Features

- **Detection of Data Tampering**: The fallback system monitors session data integrity, detecting any unauthorized modifications or tampering attempts.
- **Dynamic Filename Generation**: If data tampering is detected, `SessionForge` generates a new filename for the session file to prevent further access to the compromised data.
- **Data Recovery**: Upon detecting tampering, `SessionForge` retrieves the original session data from the backup file or other sources and updates the session file with the correct data.
- **Overwrite Prevention**: In case of tampering, the fallback system prevents the overwrite of tampered data and ensures that only valid session data is persisted.

## Fallback Mechanism

1. **Detection**: `SessionForge` continuously monitors session data integrity during session operations.
2. **Tampering Detected**: If any signs of tampering are detected, such as changes in the session file's hash or encrypted data, the fallback system is triggered.
3. **Dynamic Filename Generation**: `SessionForge` generates a new filename for the session file to isolate the compromised data.
4. **Data Recovery**: The fallback system retrieves the original session data from backup files or other sources.
5. **Update Session File**: The session file is updated with the correct, untampered data.
6. **Prevent Overwrite**: Tampered data is not overwritten, ensuring that only valid session data is persisted.

## Configuration

- **Fallback Enablement**: The fallback system can be enabled or disabled based on configuration settings.
- **Recovery Sources**: Configuration options allow specifying backup files or alternative sources for retrieving original session data.

## Enabling Fallback System

To enable the fallback system in `SessionForge`, pass a `true` value as an additional parameter when calling the `save` or `update` functions.

### Usage Example

---

#### Saving Session Data with Fallback Enabled

```php

require 'path/to/SessionForge.php'; // Adjust the path as needed

use SessionForge\SessionForge;

try {
    // Step 1: Set up configuration
    $config = [
        // Configuration options...
    ];

    // Step 2: Instantiate SessionForge
    $sessionForgeExample = new SessionForge($config);

    // Step 3: Save session data with fallback enabled
    $sessionForgeExample->save(true); // Enable fallback system
} catch (SessionForgeExceptions $th) {
    print_r($th->formatMessage());
}
```

#### Updating Session Data with Fallback Enabled

```php

require 'path/to/SessionForge.php'; // Adjust the path as needed

use SessionForge\SessionForge;

try {
    // Step 1: Set up configuration
    $config = [
        // Configuration options...
    ];

    // Step 2: Instantiate SessionForge
    $sessionForgeExample = new SessionForge($config);

    // Step 3: Update session data with fallback enabled
    $sessionForgeExample->update($data, true); // Enable fallback system
} catch (SessionForgeExceptions $th) {
    print_r($th->formatMessage());
}
```

### Explanation

- **Additional Parameter**: By passing a `true` value as an additional parameter to the `save` or `update` functions, the fallback system is enabled.
- **Fallback System Activation**: The fallback system is triggered when changes in session data integrity are detected, such as data tampering or corruption.
- **Data Recovery**: Upon activation, the fallback system recovers original session data from backup files or other sources and updates the session file with the correct data.
- **Prevent Overwrite**: The fallback system ensures that tampered data is not overwritten, maintaining the security and integrity of session data.

## Usage Notes

- Enable the fallback system when saving or updating session data to enhance data integrity and security.
- The fallback system provides an additional layer of protection against unauthorized modifications or tampering attempts.

---

This approach provides a straightforward method for users to enable the fallback system in `SessionForge`, enhancing the security and integrity of session data. Adjust the configuration and usage as needed to fit your specific application requirements.
