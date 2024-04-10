import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const key = process.env['NEXT_PUBLIC_COOKIE_PASS'];

// Encryption function
export const encryptData = (data: any): string => {
	if (typeof data === 'string') {
		return CryptoJS.AES.encrypt(data, key).toString();
	} else {
		const jsonString = JSON.stringify(data);
		return CryptoJS.AES.encrypt(jsonString, key).toString();
	}
};

// Decryption function
export const decryptData = (encryptedData: string): any => {
	const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key);
	const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
	try {
		return JSON.parse(decryptedData);
	} catch (error) {
		// If decryption fails, return the string value
		return decryptedData;
	}
};

// Set a cookie with encrypted data
export const setEncryptedCookie = (name: string, value: any, expiryDays: number): void => {
	const encryptedValue: string = encryptData(value);
	Cookies.set(name, encryptedValue, { expires: expiryDays });
};

// Get the decrypted data from the cookie
export const getDecryptedCookie = (name: string): any => {
	const encryptedValue: string | undefined = Cookies.get(name);
	if (encryptedValue) {
		return decryptData(encryptedValue);
	}
	return null;
};
