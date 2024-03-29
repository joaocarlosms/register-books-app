import { Input as NativeBaseInput, IInputProps, FormControl} from "native-base";

type Props = IInputProps & {
    errorMessage?: string | null;
}



export function Input({ errorMessage = null , isInvalid, ...rest}: Props){
    const invalid = !!errorMessage || isInvalid;

    return(
        <FormControl mb={4} isInvalid={invalid}>
            <NativeBaseInput
                shadow={2}
                bgColor={'gray.500'}
                h={16}
                isInvalid={invalid}
                _focus={{
                    borderWidth: 2,
                    bgColor: '#ececec',
                    borderColor: 'green.500',
                }}
                _invalid={{
                    borderWidth: 2,
                    borderColor: 'red.500',
                }}
                { ...rest }
            />
            <FormControl.ErrorMessage>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}