'use client';
import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4',
		padding: 10
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	}
});

// Create PDF component
const MyDocument = () => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.section}>
				<Text>Section #1</Text>
			</View>
			<View style={styles.section}>
				<Text>Section #2</Text>
			</View>
		</Page>
	</Document>
);

// Component to render PDF and download link
const PDFComponent = () => (
	<>
		<PDFViewer style={{ width: '100%', height: '700px' }}>
			<MyDocument />
		</PDFViewer>
		<PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
			{({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
		</PDFDownloadLink>
	</>
);

export default PDFComponent;
