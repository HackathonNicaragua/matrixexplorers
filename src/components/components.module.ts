import { NgModule } from '@angular/core';
import { AvatarComponent } from './avatar/avatar';
import { ChallengeComponent } from './challenge/challenge';
import { ChallengeTypeComponent } from './challenge-type/challenge-type';
import { LevelComponent } from './level/level';
import { ProfileComponent } from './profile/profile';
import { ProfileChallengesComponent } from './profile-challenges/profile-challenges';
import { ProfileFollowersComponent } from './profile-followers/profile-followers';
import { PublicityComponent } from './publicity/publicity';
import { PublicityChallengeComponent } from './publicity-challenge/publicity-challenge';
import { ProgressBarComponent } from './progress-bar/progress-bar';
@NgModule({
	declarations: [AvatarComponent,
    ChallengeComponent,
    ChallengeTypeComponent,
    LevelComponent,
    ProfileComponent,
    ProfileChallengesComponent,
    ProfileFollowersComponent,
    PublicityComponent,
    PublicityChallengeComponent,
    ProgressBarComponent],
	imports: [],
	exports: [AvatarComponent,
    ChallengeComponent,
    ChallengeTypeComponent,
    LevelComponent,
    ProfileComponent,
    ProfileChallengesComponent,
    ProfileFollowersComponent,
    PublicityComponent,
    PublicityChallengeComponent,
    ProgressBarComponent]
})
export class ComponentsModule {}
