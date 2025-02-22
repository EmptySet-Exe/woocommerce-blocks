/**
 * External dependencies
 */
import { isExperimentalBuild } from '@woocommerce/block-settings';
import { registerBlockType } from '@wordpress/blocks';
import { Icon, starEmpty } from '@wordpress/icons';
import classNames from 'classnames';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import { blockAttributes } from './attributes';
import type { Attributes } from './types';

if ( isExperimentalBuild() ) {
	registerBlockType( metadata, {
		icon: {
			src: (
				<Icon
					icon={ starEmpty }
					className="wc-block-editor-components-block-icon"
				/>
			),
		},
		attributes: {
			...metadata.attributes,
			...blockAttributes,
		},
		edit,
		// Save the props to post content.
		save( { attributes }: { attributes: Attributes } ) {
			const { className, heading, headingLevel } = attributes;
			const data: Record< string, unknown > = {
				'data-heading': heading,
				'data-heading-level': headingLevel,
			};
			return (
				<div
					{ ...useBlockProps.save( {
						className: classNames( 'is-loading', className ),
					} ) }
					{ ...data }
				>
					<span
						aria-hidden
						className="wc-block-product-rating-filter__placeholder"
					/>
				</div>
			);
		},
	} );
}
