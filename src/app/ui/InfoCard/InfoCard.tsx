import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'

interface InfoCardProps {
  title: string
  children: React.ReactNode
}

export const InfoCard: React.FC<InfoCardProps> = ({title, children}) => {
  return (
    <Card className="rounded-2xl bg-white w-[400px] hover:bg-accent hover:border-gray-300">
      <CardHeader>
        <CardTitle className='text-center uppercase'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}