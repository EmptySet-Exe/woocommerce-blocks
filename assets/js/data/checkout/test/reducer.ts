/**
 * Internal dependencies
 */
import reducer from '../reducers';
import { defaultState } from '../default-state';
import { STATUS } from '../constants';
import * as actions from '../actions';

describe.only( 'Checkout Store Reducer', () => {
	it( 'should return the initial state', () => {
		expect( reducer( undefined, {} ) ).toEqual( defaultState );
	} );

	it( 'should handle SET_IDLE', () => {
		const expectedState = {
			...defaultState,
			status: STATUS.IDLE,
		};

		expect( reducer( defaultState, actions.setIdle() ) ).toEqual(
			expectedState
		);
	} );

	it( 'should handle SET_REDIRECT_URL', () => {
		const expectedState = {
			...defaultState,
			redirectUrl: 'https://example.com',
			status: STATUS.IDLE,
		};

		expect(
			reducer(
				defaultState,
				actions.setRedirectUrl( 'https://example.com' )
			)
		).toEqual( expectedState );
	} );

	it( 'should handle SET_PAYMENT_RESULT', () => {
		const mockResponse = {
			message: 'success',
			redirectUrl: 'https://example.com',
			paymentStatus: 'not set' as const,
			paymentDetails: {},
		};

		const expectedState = {
			...defaultState,
			status: STATUS.IDLE,
			paymentResult: mockResponse,
		};

		expect(
			reducer( defaultState, actions.setPaymentResult( mockResponse ) )
		).toEqual( expectedState );
	} );

	it( 'should handle SET_COMPLETE', () => {
		const expectedState = {
			...defaultState,
			status: STATUS.COMPLETE,
			redirectUrl: 'https://example.com',
		};

		expect(
			reducer(
				defaultState,
				actions.setComplete( {
					redirectUrl: 'https://example.com',
				} )
			)
		).toEqual( expectedState );
	} );

	it( 'should handle SET_PROCESSING', () => {
		const expectedState = {
			...defaultState,
			status: STATUS.PROCESSING,
		};

		expect( reducer( defaultState, actions.setProcessing() ) ).toEqual(
			expectedState
		);
	} );

	it( 'should handle SET_HAS_ERROR when status is PROCESSING', () => {
		const initialState = { ...defaultState, status: STATUS.PROCESSING };

		const expectedState = {
			...defaultState,
			hasError: true,
			status: STATUS.IDLE,
		};

		expect( reducer( initialState, actions.setHasError( true ) ) ).toEqual(
			expectedState
		);
	} );

	it( 'should handle SET_HAS_ERROR when status is BEFORE_PROCESSING', () => {
		const initialState = {
			...defaultState,
			status: STATUS.BEFORE_PROCESSING,
		};

		const expectedState = {
			...defaultState,
			hasError: true,
			status: STATUS.IDLE,
		};

		expect( reducer( initialState, actions.setHasError( true ) ) ).toEqual(
			expectedState
		);
	} );

	it( 'should handle SET_HAS_ERROR when status is anything else', () => {
		const initialState = { ...defaultState, status: STATUS.PRISTINE };

		const expectedState = {
			...defaultState,
			hasError: false,
			status: STATUS.IDLE,
		};

		expect( reducer( initialState, actions.setHasError( false ) ) ).toEqual(
			expectedState
		);
	} );

	it( 'should handle SET_BEFORE_PROCESSING', () => {
		const expectedState = {
			...defaultState,
			status: STATUS.BEFORE_PROCESSING,
		};

		expect(
			reducer( defaultState, actions.setBeforeProcessing() )
		).toEqual( expectedState );
	} );

	it( 'should handle SET_AFTER_PROCESSING', () => {
		const expectedState = {
			...defaultState,
			status: STATUS.AFTER_PROCESSING,
		};

		expect( reducer( defaultState, actions.setAfterProcessing() ) ).toEqual(
			expectedState
		);
	} );

	it( 'should handle INCREMENT_CALCULATING', () => {
		const expectedState = {
			...defaultState,
			status: STATUS.IDLE,
			calculatingCount: 1,
		};

		expect(
			reducer( defaultState, actions.incrementCalculating() )
		).toEqual( expectedState );
	} );

	it( 'should handle DECREMENT_CALCULATING', () => {
		const initialState = {
			...defaultState,
			calculatingCount: 1,
		};

		const expectedState = {
			...defaultState,
			status: STATUS.IDLE,
			calculatingCount: 0,
		};

		expect(
			reducer( initialState, actions.decrementCalculating() )
		).toEqual( expectedState );
	} );

	it( 'should handle SET_CUSTOMER_ID', () => {
		const expectedState = {
			...defaultState,
			status: STATUS.IDLE,
			customerId: 1,
		};

		expect( reducer( defaultState, actions.setCustomerId( 1 ) ) ).toEqual(
			expectedState
		);
	} );

	it( 'should handle SET_SHIPPING_ADDRESS_AS_BILLING_ADDRESS', () => {
		const expectedState = {
			...defaultState,
			status: STATUS.IDLE,
			useShippingAsBilling: false,
		};

		expect(
			reducer( defaultState, actions.setUseShippingAsBilling( false ) )
		).toEqual( expectedState );
	} );

	it( 'should handle SET_SHOULD_CREATE_ACCOUNT', () => {
		const expectedState = {
			...defaultState,
			status: STATUS.IDLE,
			shouldCreateAccount: true,
		};

		expect(
			reducer( defaultState, actions.setShouldCreateAccount( true ) )
		).toEqual( expectedState );
	} );

	it( 'should handle SET_ORDER_NOTES', () => {
		const expectedState = {
			...defaultState,
			status: STATUS.IDLE,
			orderNotes: 'test',
		};

		expect(
			reducer( defaultState, actions.setOrderNotes( 'test' ) )
		).toEqual( expectedState );
	} );

	it( 'should handle SET_EXTENSION_DATA', () => {
		const mockExtensionData = {
			testExtension: { key: 'test', value: 'test2' },
		};
		const expectedState = {
			...defaultState,
			status: STATUS.IDLE,
			extensionData: mockExtensionData,
		};

		expect(
			reducer(
				defaultState,
				actions.setExtensionData( mockExtensionData )
			)
		).toEqual( expectedState );
	} );
} );
