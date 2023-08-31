import { ReactNode } from 'react';
import { TextareaAutosizeProps } from '@mui/base/TextareaAutosize';
export type TextAreaProps = Omit<TextareaAutosizeProps, 'disabled' | 'className' | 'minRows' | 'maxRows'> & {
    /**
     * エラーが発生していることを示したい場合に指定
     * @default false
     */
    error?: boolean;
    /**
     * ユーザーからの入力を受け付けないことを示すために非活性状態にしたい場合に指定
     * @default false
     */
    disabled?: boolean;
    /**
     * エラーメッセージ等の副次的内容をユーザーに示すときに指定
     *
     * 文字列の場合はデフォルトのスタイルが適用され、ValidなReactElementを渡すと渡したものがそのまま描画されます。
     */
    helperText?: ReactNode;
    /**
     * ラベルを表示するときに指定
     *
     * 文字列の場合はデフォルトのスタイルが適用され、ValidなReactElementを渡すと渡したものがそのまま描画されます。
     */
    label?: ReactNode;
    className?: string;
} & ({
    /**
     * 最小の行数を指定 (入力行が何行でもminRows未満にはならない)
     *
     * _`rows`と組み合わせて使うことはできません_
     */
    minRows?: number;
    /**
     * 最大の行数を指定 (入力行が何行でもmaxRowsより多くはならない)
     *
     * _`rows`と組み合わせて使うことはできません_
     */
    maxRows?: number;
    /**
     * 行数を指定
     *
     * _`minRows`, `maxRows`と組み合わせて使うことはできません_
     */
    rows?: never;
} | {
    /**
     * 最小の行数を指定 (入力行が何行でもminRows未満にはならない)
     *
     * _`rows`と組み合わせて使うことはできません_
     */
    minRows?: never;
    /**
     * 最大の行数を指定 (入力行が何行でもmaxRowsより多くはならない)
     *
     * _`rows`と組み合わせて使うことはできません_
     */
    maxRows?: never;
    /**
     * 行数を指定
     *
     * _`minRows`, `maxRows`と組み合わせて使うことはできません_
     */
    rows?: number;
});
export declare const TextArea: import("react").ForwardRefExoticComponent<(Pick<Omit<TextareaAutosizeProps, "className" | "disabled" | "maxRows" | "minRows"> & {
    /**
     * エラーが発生していることを示したい場合に指定
     * @default false
     */
    error?: boolean | undefined;
    /**
     * ユーザーからの入力を受け付けないことを示すために非活性状態にしたい場合に指定
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * エラーメッセージ等の副次的内容をユーザーに示すときに指定
     *
     * 文字列の場合はデフォルトのスタイルが適用され、ValidなReactElementを渡すと渡したものがそのまま描画されます。
     */
    helperText?: ReactNode;
    /**
     * ラベルを表示するときに指定
     *
     * 文字列の場合はデフォルトのスタイルが適用され、ValidなReactElementを渡すと渡したものがそのまま描画されます。
     */
    label?: ReactNode;
    className?: string | undefined;
} & {
    /**
     * 最小の行数を指定 (入力行が何行でもminRows未満にはならない)
     *
     * _`rows`と組み合わせて使うことはできません_
     */
    minRows?: number | undefined;
    /**
     * 最大の行数を指定 (入力行が何行でもmaxRowsより多くはならない)
     *
     * _`rows`と組み合わせて使うことはできません_
     */
    maxRows?: number | undefined;
    /**
     * 行数を指定
     *
     * _`minRows`, `maxRows`と組み合わせて使うことはできません_
     */
    rows?: undefined;
}, "className" | "style" | "form" | "label" | "slot" | "title" | "color" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "name" | "autoFocus" | "disabled" | "value" | "autoComplete" | "maxLength" | "minLength" | "readOnly" | "required" | "cols" | "dirName" | "rows" | "wrap" | "error" | "helperText" | "maxRows" | "minRows"> | Pick<Omit<TextareaAutosizeProps, "className" | "disabled" | "maxRows" | "minRows"> & {
    /**
     * エラーが発生していることを示したい場合に指定
     * @default false
     */
    error?: boolean | undefined;
    /**
     * ユーザーからの入力を受け付けないことを示すために非活性状態にしたい場合に指定
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * エラーメッセージ等の副次的内容をユーザーに示すときに指定
     *
     * 文字列の場合はデフォルトのスタイルが適用され、ValidなReactElementを渡すと渡したものがそのまま描画されます。
     */
    helperText?: ReactNode;
    /**
     * ラベルを表示するときに指定
     *
     * 文字列の場合はデフォルトのスタイルが適用され、ValidなReactElementを渡すと渡したものがそのまま描画されます。
     */
    label?: ReactNode;
    className?: string | undefined;
} & {
    /**
     * 最小の行数を指定 (入力行が何行でもminRows未満にはならない)
     *
     * _`rows`と組み合わせて使うことはできません_
     */
    minRows?: undefined;
    /**
     * 最大の行数を指定 (入力行が何行でもmaxRowsより多くはならない)
     *
     * _`rows`と組み合わせて使うことはできません_
     */
    maxRows?: undefined;
    /**
     * 行数を指定
     *
     * _`minRows`, `maxRows`と組み合わせて使うことはできません_
     */
    rows?: number | undefined;
}, "className" | "style" | "form" | "label" | "slot" | "title" | "color" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "name" | "autoFocus" | "disabled" | "value" | "autoComplete" | "maxLength" | "minLength" | "readOnly" | "required" | "cols" | "dirName" | "rows" | "wrap" | "error" | "helperText" | "maxRows" | "minRows">) & import("react").RefAttributes<HTMLTextAreaElement>>;
