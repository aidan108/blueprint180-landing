import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import SocialProof from '@/components/landing/SocialProof';
import HiddenCost from '@/components/landing/HiddenCost';
import SystemReset from '@/components/landing/SystemReset';
import Methodology from '@/components/landing/Methodology';
import CeoTestimonials from '@/components/landing/CeoTestimonials';
import ProgrammeIncludes from '@/components/landing/ProgrammeIncludes';
import WhyPushingHarder from '@/components/landing/WhyPushingHarder';
import AssessmentCTA from '@/components/landing/AssessmentCTA';
import ComparisonCards from '@/components/landing/ComparisonCards';
import VideoTestimonials from '@/components/landing/VideoTestimonials';
import CredentialsStack from '@/components/landing/CredentialsStack';
import InsightToMechanism from '@/components/landing/InsightToMechanism';
import Reciprocity from '@/components/landing/Reciprocity';
import WhoThisWorksFor from '@/components/landing/WhoThisWorksFor';
import RippleEffect from '@/components/landing/RippleEffect';
import WhyNotDIY from '@/components/landing/WhyNotDIY';
import HowItWorks from '@/components/landing/HowItWorks';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';
import ImageBreak from '@/components/landing/ImageBreak';
import breakRooftop from '@/assets/break-rooftop.jpg';
import breakAmazon from '@/assets/break-amazon.jpg';

const BreakFree = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <HiddenCost />
      <ImageBreak
        src={breakRooftop}
        alt="Executive on rooftop at dawn overlooking the city"
        overlayText="The workload isn't the problem. Your system's response to it is."
      />
      <SystemReset />
      <Methodology />
      <CeoTestimonials />
      <ProgrammeIncludes />
      <WhyPushingHarder />
      <AssessmentCTA />
      <ComparisonCards />
      <VideoTestimonials />
      <CredentialsStack />
      <InsightToMechanism />
      <ImageBreak
        src={breakAmazon}
        alt="Amazon rainforest canopy at golden hour"
        height="h-[40vh] md:h-[50vh]"
      />
      <Reciprocity />
      <WhoThisWorksFor />
      <RippleEffect />
      <WhyNotDIY />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default BreakFree;
