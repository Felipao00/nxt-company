// app/api/chat/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    const GROQ_API_KEY = process.env.GROQ_API_KEY
    
    if (!GROQ_API_KEY) {
      // Resposta sem API (modo offline)
      return NextResponse.json({
        response: generateSmartResponse(message)
      })
    }

    const systemPrompt = `Você é o assistente virtual premium da NXT Digital, uma empresa de tecnologia de elite.

SOBRE A NXT DIGITAL:
- Empresa brasileira de tecnologia fundada em 2019
- Especializada em desenvolvimento web, sistemas, e-commerce e aplicativos
- 150+ projetos entregues, 80+ clientes ativos
- Equipe de 25 especialistas
- Atendimento em 8 países

SERVIÇOS:
1. Sites & Portais Institucionais (a partir de R$ 8.000)
2. E-commerce (a partir de R$ 15.000)
3. Sistemas Web Personalizados (a partir de R$ 20.000)
4. Aplicativos Mobile (a partir de R$ 25.000)
5. Consultoria em Tecnologia (a partir de R$ 5.000)
6. Suporte e Manutenção (planos mensais a partir de R$ 1.500)

DIFERENCIAIS:
- Design premium e exclusivo
- Tecnologia de ponta (Next.js, React, Node.js)
- Performance otimizada (90+ PageSpeed)
- Suporte 24/7
- Metodologia ágil e transparente

CONTATO:
- WhatsApp: (11) 99999-9999
- Email: contato@nxtdigital.com.br
- Site: nxtdigital.com.br

REGRAS DE ATENDIMENTO:
1. Seja sempre profissional, cordial e objetivo
2. Pergunte sobre o projeto e necessidades específicas
3. Sugira agendar uma reunião gratuita de diagnóstico
4. Para orçamentos, peça para entrar em contato pelo WhatsApp
5. Ofereça cases relevantes quando apropriado
6. Mantenha respostas concisas (máximo 3 parágrafos)
7. Use português formal mas amigável`

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message },
        ],
        temperature: 0.7,
        max_tokens: 400,
      }),
    })

    const data = await response.json()
    return NextResponse.json({
      response: data.choices[0].message.content
    })

  } catch (error) {
    console.error('Chat Error:', error)
    return NextResponse.json({
      response: 'Você também pode falar diretamente conosco pelo WhatsApp: (11) 99999-9999 ou email: contato@nxtdigital.com.br'
    })
  }
}

// Sistema de respostas inteligentes offline
function generateSmartResponse(message: string): string {
  const msg = message.toLowerCase()

  if (msg.includes('preço') || msg.includes('valor') || msg.includes('custo') || msg.includes('orçamento')) {
    return 'Nossos projetos variam conforme a complexidade. Para um orçamento personalizado e gratuito, entre em contato pelo WhatsApp: (11) 99999-9999. Em média:\n\n• Sites: a partir de R$ 8.000\n• E-commerce: a partir de R$ 15.000\n• Sistemas: a partir de R$ 20.000\n\nPosso ajudar com mais alguma informação?'
  }

  if (msg.includes('prazo') || msg.includes('tempo') || msg.includes('entrega')) {
    return 'O prazo depende do escopo do projeto. Em média:\n\n• Site institucional: 4-6 semanas\n• E-commerce: 6-10 semanas\n• Sistema web: 8-14 semanas\n\nTrabalhamos com metodologia ágil para entregas rápidas e de qualidade. Gostaria de agendar uma reunião para discutirmos seu projeto?'
  }

  if (msg.includes('serviço') || msg.includes('fazem') || msg.includes('trabalham')) {
    return 'Somos especializados em:\n\n1. Sites e Portais Corporativos\n2. E-commerce de Alta Performance\n3. Sistemas Web Personalizados\n4. Aplicativos Mobile\n5. Consultoria em Tecnologia\n6. Suporte e Manutenção\n\nQual desses serviços mais se adequa à sua necessidade?'
  }

  if (msg.includes('contato') || msg.includes('whatsapp') || msg.includes('telefone') || msg.includes('email')) {
    return 'Você pode falar conosco por:\n\n📱 WhatsApp: (11) 99999-9999\n📧 Email: contato@nxtdigital.com.br\n🌐 Site: nxtdigital.com.br\n\nNosso time está disponível de segunda a sexta, das 9h às 18h.'
  }

  if (msg.includes('experiência') || msg.includes('portfolio') || msg.includes('cases') || msg.includes('clientes')) {
    return 'Temos mais de 150 projetos entregues para 80+ clientes em 8 países. Alguns cases de sucesso:\n\n• TechCorp: Portal corporativo (340% mais leads)\n• InnovaSolutions: E-commerce B2B (aumento de 200% em vendas)\n• DataFlow: Sistema de gestão (redução de 60% em custos operacionais)\n\nGostaria de conhecer algum case específico?'
  }

  // Resposta padrão
  return 'Obrigado pelo seu interesse na NXT Digital! 😊\n\nPara entender melhor sua necessidade e oferecer a melhor solução, que tal agendarmos uma reunião rápida? Enquanto isso, você pode conhecer mais sobre nós em nxtdigital.com.br\n\nOu se preferir, fale diretamente conosco pelo WhatsApp: (11) 99999-9999'
}