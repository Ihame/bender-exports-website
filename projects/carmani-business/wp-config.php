<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tekaowvx_green_harvest' );

/** Database username */
define( 'DB_USER', 'tekaowvx_green_harvest' );

/** Database password */
define( 'DB_PASSWORD', 'tekaowvx_green_harvest' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '|pCm_=Zyu<<I^t%~%#`/y/8?C[kke$eXt-%zRXO)tFuuo7%guARQs@,bU8S3L!7}' );
define( 'SECURE_AUTH_KEY',  'BZrO+k;|z#PFr.Ke(d=gq5v)ugAMMd-zIJ}bb(sMvI~/m-P112>{*Ag(!m&}M6ni' );
define( 'LOGGED_IN_KEY',    'Yhk_Wl(}@^nBG|kOw6N*6)x;nmZe5HcCl&aFfApKtHcO]:{5~BJeuUxS}(KO$-])' );
define( 'NONCE_KEY',        '2TZ1xDH:5KX1%%;&wH*F<R:;.F<)2d#hsNUYuqzM?$2C$t/03X@8Q{Lz!l@+?yUV' );
define( 'AUTH_SALT',        '*IKGI2Ryy^8w+Oa1K6o4%|9}Q^G1j6%31{$i<6|6tn.Tl F*mN1}F=@#IMh?V:97' );
define( 'SECURE_AUTH_SALT', ':Dc,).m#g{QC%6-uU> 2&%*(]fF]O27MB}9;wD&Kf8Z~?p5xarS?2jv|wl0GV?B}' );
define( 'LOGGED_IN_SALT',   '8H1SWks<?W4Y`i8Gip,4wz42f$HmcHJ6Q~;*z-i^G-^uv3kZbjU+6~lRVIP1|L/I' );
define( 'NONCE_SALT',       '1`;XfS7abhV.NMq2BlZ!k1rAD#W:[o,>]B3:[1&{3}.M7sWjH;]:_OYwKAD3:S_$' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
