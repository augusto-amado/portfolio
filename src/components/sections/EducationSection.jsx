import React from 'react';
import { BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const EducationSection = () => {
  const { copy } = useLanguage();

  return (
  <section id="education" className="space-y-12">
    <div className="space-y-4">
      <h2 className="text-3xl font-bold flex items-center gap-3 text-white font-mono">
        <BookOpen className="h-8 w-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
        {copy.education.title}
      </h2>
    </div>

    <Card className="bg-[#080808] border border-cyan-500/20 hover:border-cyan-500/50 transition-all group max-w-3xl rounded-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]" data-testid="education-card">
      <CardHeader className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 pb-6 border-b border-cyan-500/10">
        <div className="space-y-1">
          <CardTitle className="text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">
            {copy.education.degree}
          </CardTitle>
          <div className="text-xl text-gray-400 font-mono">Anhanguera</div>
        </div>
        <Badge variant="outline" className="w-fit text-cyan-400 border-cyan-500/50 bg-cyan-950/20 px-4 py-1 rounded-none font-mono">
          {copy.education.status}
        </Badge>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 text-sm text-gray-400 font-mono">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          {copy.education.period}
        </div>
      </CardContent>
    </Card>
  </section>
  );
};

export default EducationSection;
