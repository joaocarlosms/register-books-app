import { VStack, Heading, Center, Image } from 'native-base';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Bookstore from '../../assets/bookstore.png';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type FormDataProps = {
    name: string;
    email: string;
    password: string;
    password_confirm: string;
}

const LoginSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().email('E-mail inválido').required('Informe o e-mail'),
    password: yup.string().required('Informe a senha').min(6, "A senha deve ter no minimo 6 digitos"),
    password_confirm: yup.string().required('Confirmar senha').oneOf([yup.ref('password'), null], 'As senhas informadas não sao correspondents'),
});

export default function Login() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(LoginSchema)
    });

    function handleLogin(data: FormDataProps) {
        if(data !== null) {
            console.log(data);
            navigation.navigate('Home');
        }
    }

    const navigation = useNavigation();

    return (
        <VStack bgColor={'#ffb66c'} flex={1} px={10}>
            <Center>
                <Heading my={24} color={'#f9fad2'}>
                    <Image alt='Bookstore logo' source={Bookstore} resizeMode='contain' size={200} />
                </Heading>
                
                <Controller 
                    control={control}
                    name='name'
                    render={({ field: { onChange } }) => (
                        <Input 
                            placeholder='Digite seu nome...' 
                            onChangeText={onChange}
                            errorMessage={errors.name?.message}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name='email'
                    render={({ field: { onChange } }) => (
                        <Input 
                            placeholder='Digite seu e-mail...' 
                            onChangeText={onChange}
                            errorMessage={errors.email?.message} // Adicionado errorMessage
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name='password'
                    render={({ field: { onChange } }) => (
                        <Input 
                            placeholder='Digite sua senha...'
                            onChangeText={onChange}
                            secureTextEntry
                            errorMessage={errors.password?.message} // Adicionado errorMessage
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name='password_confirm'
                    render={({ field: { onChange } }) => (
                        <Input 
                            placeholder='Confirmar senha...' 
                            onChangeText={onChange}
                            secureTextEntry
                            errorMessage={errors.password_confirm?.message} // Adicionado errorMessage
                        />
                    )}
                />
                <TouchableOpacity onPress={handleSubmit(handleLogin)}>
                    <Button 
                        title='Cadastrar' 
                    />
                </TouchableOpacity>

            </Center>
        </VStack>
    );
}
