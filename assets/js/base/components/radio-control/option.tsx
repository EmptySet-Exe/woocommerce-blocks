/**
 * External dependencies
 */
import classnames from 'classnames';
import deprecated from '@wordpress/deprecated';

/**
 * Internal dependencies
 */
import OptionLayout from './option-layout';
import type { RadioControlOptionProps } from './types';

const Option = ( {
	checked,
	name,
	onChange,
	option,
}: RadioControlOptionProps ): JSX.Element => {
	const { value, label, description, secondaryLabel, secondaryDescription } =
		option;

	// Name this "safeOnChange" because onChange might not be a function, but we know this one will be eventually.
	let safeOnChange = onChange;
	if ( typeof safeOnChange !== 'function' ) {
		safeOnChange = () => void 0;
		deprecated(
			'Option must receive an onChange prop of type function, you passed ' +
				typeof onChange,
			{
				hint: 'Pass onChange as a prop to Option',
				plugin: 'woocommerce-gutenberg-products-block',
				link: 'https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/6636',
			}
		);
	}

	const onChangeValue = ( event: React.ChangeEvent< HTMLInputElement > ) =>
		safeOnChange( event.target.value );

	return (
		<label
			className={ classnames(
				'wc-block-components-radio-control__option',
				{
					'wc-block-components-radio-control__option-checked':
						checked,
				}
			) }
			htmlFor={ `${ name }-${ value }` }
		>
			<input
				id={ `${ name }-${ value }` }
				className="wc-block-components-radio-control__input"
				type="radio"
				name={ name }
				value={ value }
				onChange={ onChangeValue }
				checked={ checked }
				aria-describedby={ classnames( {
					[ `${ name }-${ value }__label` ]: label,
					[ `${ name }-${ value }__secondary-label` ]: secondaryLabel,
					[ `${ name }-${ value }__description` ]: description,
					[ `${ name }-${ value }__secondary-description` ]:
						secondaryDescription,
				} ) }
			/>
			<OptionLayout
				id={ `${ name }-${ value }` }
				label={ label }
				secondaryLabel={ secondaryLabel }
				description={ description }
				secondaryDescription={ secondaryDescription }
			/>
		</label>
	);
};

export default Option;
