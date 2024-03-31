import { useRef, useState } from 'react';
import { FieldValues, Control, FieldError } from 'react-hook-form';

import { JoinDefaultStateType } from '../Join';

import { Input } from '@components/Input';

import * as S from './style';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface AddressSearchProps<T extends FieldValues> {
  control: Control<JoinDefaultStateType>;
  errors: FieldError;
  validate?: (value: string) => boolean | string;
  onAddressChange: (address: string) => void;
}

const AddressSearch = <T extends FieldValues>(props: AddressSearchProps<T>) => {
  const { control, errors, onAddressChange } = props;
  const [firstAddress, setFirstAddress] = useState<string>('');

  const wrapRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const foldDaumPostcode = () => {
    if (!wrapRef.current) return;

    wrapRef.current.style.display = 'none';
  };

  const execDaumPostcode = () => {
    const currentScroll = Math.max(
      document.body.scrollTop,
      document.documentElement.scrollTop,
    );

    new window.daum.Postcode({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      oncomplete: (data: any) => {
        let addr = '';

        if (data.userSelectedType === 'R') {
          addr = data.roadAddress;
        } else {
          addr = data.jibunAddress;
        }

        if (wrapRef.current) {
          wrapRef.current.style.display = 'none';
        }

        document.body.scrollTop = currentScroll;

        onAddressChange(addr);
        setFirstAddress(addr);
      },

      onresize: (size: { height: number }) => {
        if (!wrapRef.current) return;

        wrapRef.current.style.height = `${size.height}px`;
      },
      width: '100%',
      height: '100%',
    }).embed(wrapRef.current);

    if (wrapRef.current) {
      wrapRef.current.style.display = 'block';
    }
  };

  return (
    <S.Wrapper>
      <div className="container">
        <div>
          <Input<JoinDefaultStateType>
            name="firstAddress"
            control={control}
            label="주소"
            type="text"
            error={errors}
            extractNumber={false}
            placeholder="주소를 검색해주세요."
            addon={{
              buttonText: '주소검색',
              onSubmit: () => searchRef.current?.click(),
            }}
            value={firstAddress}
          />
          <Input<JoinDefaultStateType>
            name="lastAddress"
            control={control}
            type="text"
            error={errors}
            extractNumber={false}
          />

          <input
            style={{ display: 'none' }}
            ref={searchRef}
            className="button"
            type="button"
            onClick={execDaumPostcode}
            value="주소검색"
          />
        </div>
      </div>
      <div
        id="wrap"
        style={{
          display: 'none',
          border: '1px solid',
          width: '500px',
          height: '300px',
          margin: '5px 0',
          position: 'relative',
        }}
        ref={wrapRef}
      >
        <img
          src="//t1.daumcdn.net/postcode/resource/images/close.png"
          id="btnFoldWrap"
          style={{
            cursor: 'pointer',
            position: 'absolute',
            right: '0px',
            top: '-1px',
            zIndex: '1',
          }}
          onClick={foldDaumPostcode}
          alt="접기 버튼"
        />
      </div>
    </S.Wrapper>
  );
};

export default AddressSearch;
