import { Amplify } from 'aws-amplify'
import { translations } from '@aws-amplify/ui-vue'
import { I18n } from 'aws-amplify/utils'

const AWS_REGION = import.meta.env.VITE_AWS_REGION
const USER_POOL_ID = import.meta.env.VITE_COGNITO_USER_POOL_ID
const USER_POOL_CLIENT_ID = import.meta.env.VITE_COGNITO_USER_POOL_CLIENT_ID

I18n.putVocabularies(translations)
I18n.setLanguage('pt')

I18n.putVocabularies({
  pt: {
    Email: 'Email',
    'Enter your email': 'Digite seu e-mail',
    'Reset Password': 'Redefinir Senha',
  },
})

Amplify.configure({
  auth: {
    aws_region: AWS_REGION,
    mfa_methods: [],
    standard_required_attributes: ['email'],
    username_attributes: ['email'],
    user_verification_types: ['email'],
    groups: [],
    mfa_configuration: 'NONE',
    password_policy: {
      min_length: 8,
      require_lowercase: true,
      require_numbers: true,
      require_symbols: true,
      require_uppercase: true,
    },
    unauthenticated_identities_enabled: true,
    user_pool_id: USER_POOL_ID,
    user_pool_client_id: USER_POOL_CLIENT_ID,
  },
  version: '1.4',
})
